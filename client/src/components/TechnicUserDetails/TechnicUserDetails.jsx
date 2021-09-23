import React, {useState, useMemo} from "react";
import { useSelector } from "react-redux";
import { StyledDiv, ReportedDiv , ImgTech, Button, UserTechDiv, UserInfoDiv, ItemInfo, ItemTech } from "./Styled";
import { useHistory } from "react-router-dom";
import ReportUser from "../ReportUser/ReportUser";
import { GoReport } from "react-icons/go";

export default function TechnicUserDetails() {
  const history = useHistory();
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  let config = useMemo(() => {
    return {
      headers: {
        "x-access-token": user && user.token,
      },
    };
  }, [user]);

  const [flagReported, setFlagReported] = useState(false);
  const [flagLogin, setFlagLogin] = useState(false);
  const changeFlagReported = () => {
    setFlagReported(!flagReported);
  };
  const changeFlagLogin = () => {
    setFlagLogin(!flagLogin);
  };

  const TechnicUserDetail = useSelector((state) => state.technicUserDetail);

  function handleClick() {
    history.push("/login");
  }

  return (
    <StyledDiv className="container">
       {user && user.roles[0].name === 'userFinal' && (
         <ReportedDiv flag={flagReported}>
        <div className='content' onClick={changeFlagReported}>
          <GoReport className="icon" />
          <p>Reportar</p>
        </div>
        <div className='reported'>
          <ReportUser userId={TechnicUserDetail.user._id} />
        </div>
          </ReportedDiv>
         )} 
  
        {TechnicUserDetail &&
        TechnicUserDetail.user &&
        TechnicUserDetail.user.userName ? (
          <>
            {TechnicUserDetail &&
            TechnicUserDetail.user &&
            TechnicUserDetail.user.userName ? (
              <>
                  <UserTechDiv>
                <ImgTech>
                  <img src={TechnicUserDetail.user.image} alt="" />
                </ImgTech>
                <div className='items'>
                 <ItemTech>
                  <p>Usuario</p>
                  <h4>{TechnicUserDetail.user.userName}</h4>
                  {TechnicUserDetail.score && 
                  <>
                  <p>Puntaje</p>
                  <h4>{TechnicUserDetail.score}</h4>
                  </>
                  }
                  </ItemTech>
                    <ItemTech>
                    {TechnicUserDetail.workZones && <>
                    <p>Zonas de trabajo</p>
                    {TechnicUserDetail.workZones.map((zone, idx) => {
                        return <h4 key={idx}>{zone}</h4>;
                  
                      })}
                      </>
                      }
                  </ItemTech>
                  <ItemTech>
                  <p>Especialidades</p>
                  <ul>
                    {TechnicUserDetail.jobTypes &&
                      TechnicUserDetail.jobTypes.map((zone, idx) => {
                        return <h4 key={idx}>{zone}</h4>;
                      })}
                  </ul>
                      </ItemTech>
                </div>
                </UserTechDiv>

                {user ? (
                  <UserInfoDiv>
                    <div className='items'>
                    <ItemInfo>
                    <p>Apellido</p> 
                    <h4>{TechnicUserDetail.user.lastName}</h4>
                    </ItemInfo>
                    <ItemInfo>
                    <p>Nombre</p>
                    <h4>{TechnicUserDetail.user.name}</h4>
                    </ItemInfo>
                    <ItemInfo>
                    <p>Telefono</p>
                      <h4>{TechnicUserDetail.user.phone}</h4>
                    </ItemInfo>
                    <ItemInfo>
                    <p>Mail</p>
                    <h4>{TechnicUserDetail.user.mail}</h4>
                    </ItemInfo>
           
                  </div>
                  </UserInfoDiv>
                ) : (
                  <Button onClick={handleClick}>
                    Inicia sesión para ver mas info
                  </Button>
                )}
                
              </>
            ) : null}{" "}
          </>
        ) : (
          <p>Cargando...</p>
        )}
            
 
 
    </StyledDiv>
  );
}