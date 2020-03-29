import React from "react";
import CoronaData from "./corona-data";
import CoronaDataService from "../../services/CoronaDataService";

function CoronaStats() {
  const corona = CoronaDataService();

  return (
    <div>
      <hr />
      <main className="my-4 container-fluid">
        <div className="p-3 row">
          <CoronaData>
            Confirmed {corona ? corona.confirmed.value : "fetching..."}
          </CoronaData>
          <CoronaData>
            Deaths {corona ? corona.deaths.value : "fetching..."}
          </CoronaData>
          <CoronaData>
            Recovered {corona ? corona.recovered.value : "fetching..."}
          </CoronaData>
        </div>
      </main>
    </div>
  );
}

export default CoronaStats;
