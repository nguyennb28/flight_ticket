const MapAirPort = () => {
  const mapUrl =
    "https://airportmap.vietnamairlines.com/#s=hph-cat-bi-international-copy-airport-3540260377&venue=420321696969&floor=420322445555";

  return (
    <>
      <section className="bg-white dark:bg-dark py-10">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full ">
              <div className="max-w-full overflow-auto h-[650px] no-scrollbar">
                <iframe
                  src={mapUrl}
                  frameBorder="0"
                  className="w-full h-full"
                  title="Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapAirPort;
