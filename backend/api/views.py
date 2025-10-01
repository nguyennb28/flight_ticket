from django.shortcuts import render
from rest_framework.views import Response, APIView
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework_simplejwt.authentication import JWTAuthentication
from FlightRadar24 import FlightRadar24API
import json

# Create your views here.


class Flight(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        param = request.query_params.get("nickname")

        if not param:
            return Response(
                {"error": "Param is empty"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        flights = self.process_flights(param)
        airport = flights.get("airport")
        flight_arrivals = flights.get("arrivals")
        flight_departures = flights.get("departures")
        if not flights:
            return Response(
                {"error": "Empty data"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        print(self.detach_data(flight_arrivals))
        return Response(
            {
                "count_flight_arrivals": len(flight_arrivals),
                "count_flight_departures": len(flight_departures),
                "airport": airport,
                "flight_arrivals": flight_arrivals,
                # "flight_departures": flight_departures,
            },
            status=status.HTTP_200_OK,
        )

    def process_flights(self, param):
        fr_api = FlightRadar24API()
        flights = fr_api.get_airport_details(param)
        flight_airport = flights["airport"]["pluginData"]["details"]["name"]
        flight_arrivals = flights["airport"]["pluginData"]["schedule"]["arrivals"][
            "data"
        ]
        flights_departures = flights["airport"]["pluginData"]["schedule"]["departures"][
            "data"
        ]
        if flight_arrivals:
            return {
                "airport": flight_airport,
                "arrivals": flight_arrivals,
                "departures": flights_departures,
            }
        else:
            return None

    def detach_data(self, flights):
        new_flights = []
        for flight in flights:
            if flight["flight"]:
                new_flights.append(
                    {
                        "identification": (
                            flight["flight"]["identification"]["number"]["default"]
                            if flight["flight"]["identification"]["number"]["default"]
                            else None
                        ),
                        "status": (
                            flight["flight"]["status"]["text"]
                            if flight["flight"]["status"]["text"]
                            else None
                        ),
                        "arline": {
                            "name": (
                                flight["flight"]["airline"]["name"]
                                if flight["flight"]["airline"]
                                else None
                            ),
                            "code": {
                                "iata": (
                                    flight["flight"]["airline"]["code"]["iata"]
                                    if flight["flight"]["airline"]
                                    else None
                                ),
                                "icao": (
                                    flight["flight"]["airline"]["code"]["icao"]
                                    if flight["flight"]["airline"]
                                    else None
                                ),
                            },
                        },
                        "airport": {
                            "origin": {
                                "code": {
                                    "iata": (
                                        flight["flight"]["airport"]["origin"]["code"][
                                            "iata"
                                        ]
                                        if flight["flight"]["airport"]["origin"][
                                            "code"
                                        ]["iata"]
                                        else None
                                    ),
                                    "icao": (
                                        flight["flight"]["airport"]["origin"]["code"][
                                            "icao"
                                        ]
                                        if flight["flight"]["airport"]["origin"][
                                            "code"
                                        ]["icao"]
                                        else None
                                    ),
                                },
                                "name": (
                                    flight["flight"]["airport"]["origin"]["name"]
                                    if flight["flight"]["airport"]["origin"]["name"]
                                    else None
                                ),
                            },
                        },
                        "time": {
                            "scheduled": {
                                "departure": (
                                    (
                                        flight["flight"]["time"]["scheduled"][
                                            "departure"
                                        ]
                                        if flight["flight"]["time"]["scheduled"][
                                            "departure"
                                        ]
                                        else None
                                    ),
                                ),
                                "arrival": (
                                    (
                                        flight["flight"]["time"]["scheduled"]["arrival"]
                                        if flight["flight"]["time"]["scheduled"][
                                            "arrival"
                                        ]
                                        else None
                                    ),
                                ),
                            },
                            "real": {
                                "departure": (
                                    flight["flight"]["time"]["real"]["departure"]
                                    if flight["flight"]["time"]["real"]["departure"]
                                    else None
                                ),
                                "arrival": (
                                    flight["flight"]["time"]["real"]["arrival"]
                                    if flight["flight"]["time"]["real"]["arrival"]
                                    else None
                                ),
                            },
                            "estimated": {
                                "departure": (
                                    flight["flight"]["time"]["estimated"]["departure"]
                                    if flight["flight"]["time"]["estimated"][
                                        "departure"
                                    ]
                                    else None
                                ),
                                "arrival": (
                                    flight["flight"]["time"]["estimated"]["arrival"]
                                    if flight["flight"]["time"]["estimated"]["arrival"]
                                    else None
                                ),
                            },
                            "other": {
                                "eta": (
                                    flight["flight"]["time"]["other"]["eta"]
                                    if flight["flight"]["time"]["other"]["eta"]
                                    else None
                                ),
                                "duration": (
                                    flight["flight"]["time"]["other"]["duration"]
                                    if flight["flight"]["time"]["other"]["duration"]
                                    else None
                                ),
                            },
                        },
                    }
                )

        return new_flights
