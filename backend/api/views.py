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

        # flights = json.dumps(self.process_flights(param))
        flights = self.process_flights(param)
        flight_arrivals = flights[0]
        flight_departures = flights[1]
        if not flights:
            return Response(
                {"error": "Empty data"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        return Response(
            {
                "flight_arrivals": flight_arrivals,
                "flight_departures": flight_departures,
            },
            status=status.HTTP_200_OK,
        )

    def process_flights(self, param):
        fr_api = FlightRadar24API()
        flights = fr_api.get_airport_details(param)
        flight_arrivals = flights["airport"]["pluginData"]["schedule"]["arrivals"][
            "data"
        ]
        flights_departures = flights["airport"]["pluginData"]["schedule"]["departures"][
            "data"
        ]
        if flight_arrivals:
            return [flight_arrivals, flights_departures]
        else:
            return None
