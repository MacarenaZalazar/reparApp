import axios from "axios";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import JobRequestCard from "../JobRequestCard/JobRequestCard";
import { ADMIN_URL } from "../../utils/constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const BanJobRequest = (props) => {
  const { requestsByUser } = useSelector((state) => state);
  const userString = window.sessionStorage.getItem("user");
  const useR = JSON.parse(userString);

  const config = useMemo(() => {
    return {
      headers: {
        "x-access-token": useR && useR.token,
      },
    };
  }, [useR]);

  const handleBan = async (id) => {
    try {
      await axios.put(`${ADMIN_URL}/ban/work`, { ban: true, id }, config);
      MySwal.fire({
        title: "El pedido ha sido baneado",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
    } catch (error) {
      MySwal.fire({
        title: "No se ha podido banear el pedido",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
    }
  };

  const handleUnbanned = async (id) => {
    try {
      await axios.put(`${ADMIN_URL}/ban/work`, { ban: false, id }, config);
      MySwal.fire({
        title: "El pedido ha sido desbaneado",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
    } catch (error) {
      MySwal.fire({
        title: "No se ha podido desbanear el pedido",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
    }
  };
  // console.log(requestsByUser);
  return (
    <div>
      {requestsByUser.length > 0 &&
        requestsByUser.map((u, idx) => {
          return (
            <>
              <JobRequestCard
                key={idx}
                image={u.image}
                title={u.title}
                workType={u.workType}
                complete={u.complete}
                zones={u.z}
                ban={u.ban}
                description={u.description}
                state={u.state}
                reported={u.reported}
              />
              {!u.ban ? (
                <button onClick={() => handleBan(u.id)}>Banear</button>
              ) : (
                <button onClick={() => handleUnbanned(u.id)}>Desbanear</button>
              )}
            </>
          );
        })}
    </div>
  );
};

export default BanJobRequest;