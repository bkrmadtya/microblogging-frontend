import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Menu, Sticky, Input, Segment, Container } from "semantic-ui-react";

import Nav from "../Nav";

const Home = () => {
  const history = useHistory();
  const contextRef = useRef();

  const navigateTo = path => {
    history.push(path);
  };

  return (
    <>
      <div ref={contextRef}>
        <Sticky context={contextRef}>
          <Nav>
            <Menu.Item name="home" onClick={() => navigateTo("/login")} />
            <Menu.Item name="messages" onClick={() => navigateTo("/login")} />
            <Menu.Item name="friends" onClick={() => navigateTo("/login")} />
          </Nav>
        </Sticky>

        <Container attached="bottom">
          <Segment>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur inventore, et excepturi dignissimos voluptatibus odio
            quos, iste natus saepe velit soluta accusantium sint est? Facere
            sint non odio temporibus cum! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur inventore, et excepturi
            dignissimos voluptatibus odio quos, iste natus saepe velit soluta
            accusantium sint est? Facere sint non odio temporibus cum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            inventore, et excepturi dignissimos voluptatibus odio quos, iste
            natus saepe velit soluta accusantium sint est? Facere sint non odio
            temporibus cum! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur inventore, et excepturi dignissimos voluptatibus
            odio quos, iste natus saepe velit soluta accusantium sint est?
            Facere sint non odio temporibus cum! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur inventore, et excepturi
            dignissimos voluptatibus odio quos, iste natus saepe velit soluta
            accusantium sint est? Facere sint non odio temporibus cum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            inventore, et excepturi dignissimos voluptatibus odio quos, iste
            natus saepe velit soluta accusantium sint est? Facere sint non odio
            temporibus cum! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur inventore, et excepturi dignissimos voluptatibus
            odio quos, iste natus saepe velit soluta accusantium sint est?
            Facere sint non odio temporibus cum! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur inventore, et excepturi
            dignissimos voluptatibus odio quos, iste natus saepe velit soluta
            accusantium sint est? Facere sint non odio temporibus cum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            inventore, et excepturi dignissimos voluptatibus odio quos, iste
            natus saepe velit soluta accusantium sint est? Facere sint non odio
            temporibus cum! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur inventore, et excepturi dignissimos voluptatibus
            odio quos, iste natus saepe velit soluta accusantium sint est?
            Facere sint non odio temporibus cum! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur inventore, et excepturi
            dignissimos voluptatibus odio quos, iste natus saepe velit soluta
            accusantium sint est? Facere sint non odio temporibus cum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            inventore, et excepturi dignissimos voluptatibus odio quos, iste
            natus saepe velit soluta accusantium sint est? Facere sint non odio
            temporibus cum! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur inventore, et excepturi dignissimos voluptatibus
            odio quos, iste natus saepe velit soluta accusantium sint est?
            Facere sint non odio temporibus cum! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur inventore, et excepturi
            dignissimos voluptatibus odio quos, iste natus saepe velit soluta
            accusantium sint est? Facere sint non odio temporibus cum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            inventore, et excepturi dignissimos voluptatibus odio quos, iste
            natus saepe velit soluta accusantium sint est? Facere sint non odio
            temporibus cum! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur inventore, et excepturi dignissimos voluptatibus
            odio quos, iste natus saepe velit soluta accusantium sint est?
            Facere sint non odio temporibus cum! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur inventore, et excepturi
            dignissimos voluptatibus odio quos, iste natus saepe velit soluta
            accusantium sint est? Facere sint non odio temporibus cum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            inventore, et excepturi dignissimos voluptatibus odio quos, iste
            natus saepe velit soluta accusantium sint est? Facere sint non odio
            temporibus cum! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur inventore, et excepturi dignissimos voluptatibus
            odio quos, iste natus saepe velit soluta accusantium sint est?
            Facere sint non odio temporibus cum! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur inventore, et excepturi
            dignissimos voluptatibus odio quos, iste natus saepe velit soluta
            accusantium sint est? Facere sint non odio temporibus cum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            inventore, et excepturi dignissimos voluptatibus odio quos, iste
            natus saepe velit soluta accusantium sint est? Facere sint non odio
            temporibus cum! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur inventore, et excepturi dignissimos voluptatibus
            odio quos, iste natus saepe velit soluta accusantium sint est?
            Facere sint non odio temporibus cum! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur inventore, et excepturi
            dignissimos voluptatibus odio quos, iste natus saepe velit soluta
            accusantium sint est? Facere sint non odio temporibus cum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            inventore, et excepturi dignissimos voluptatibus odio quos, iste
            natus saepe velit soluta accusantium sint est? Facere sint non odio
            temporibus cum! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur inventore, et excepturi dignissimos voluptatibus
            odio quos, iste natus saepe velit soluta accusantium sint est?
            Facere sint non odio temporibus cum! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur inventore, et excepturi
            dignissimos voluptatibus odio quos, iste natus saepe velit soluta
            accusantium sint est? Facere sint non odio temporibus cum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            inventore, et excepturi dignissimos voluptatibus odio quos, iste
            natus saepe velit soluta accusantium sint est? Facere sint non odio
            temporibus cum! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur inventore, et excepturi dignissimos voluptatibus
            odio quos, iste natus saepe velit soluta accusantium sint est?
            Facere sint non odio temporibus cum! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur inventore, et excepturi
            dignissimos voluptatibus odio quos, iste natus saepe velit soluta
            accusantium sint est? Facere sint non odio temporibus cum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            inventore, et excepturi dignissimos voluptatibus odio quos, iste
            natus saepe velit soluta accusantium sint est? Facere sint non odio
            temporibus cum! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur inventore, et excepturi dignissimos voluptatibus
            odio quos, iste natus saepe velit soluta accusantium sint est?
            Facere sint non odio temporibus cum! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur inventore, et excepturi
            dignissimos voluptatibus odio quos, iste natus saepe velit soluta
            accusantium sint est? Facere sint non odio temporibus cum!
          </Segment>
        </Container>
      </div>
    </>
  );
};

export default Home;
