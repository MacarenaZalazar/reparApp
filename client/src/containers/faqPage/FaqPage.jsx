import React from "react";
import Faq from "../../components/faq/Faq";
import Faq2 from "../../components/faq/Faq2";
import Faq3 from "../../components/faq/Faq3";
function FaqPage() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">segunda Pregunta De las FAQ</h1>
        <Faq2
          text1="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                    nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                    nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                    nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi,"
          text2="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                        nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                        nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                        nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae"
          text3="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                        nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                        nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                        nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae"
        />
      </div>
      <div className="row">
        <h1 className="text-center">tercera Pregunta De las FAQ</h1>
        <Faq3
          text1="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                    nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                    nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, "
          text2="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                        nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                        nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                        nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae"
          text3="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                        nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi, 
                        nulla ratione nihil corporis totam natus ea iusto dicta ipsum facilis cupiditate vitae
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas perspiciatis excepturi,"
        />
      </div>
    </div>
  );
}

export default FaqPage;
