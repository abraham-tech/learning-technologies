import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
// import BezierEasing from "bezier-easing";
import { Type1, Type3 } from "./Typography";
import Container from "./Container";
import CardGrid from "./CardGrid";
import content from "./content";

const StyledPage = styled(animated.main)`
  position: absolute;
  top: 0;
  right: 0;
  /* border-radius: 16px 0 0 16px; */
  background: #fff;
  height: 100%;
  width: calc(100%);
  overflow: hidden;
  /* safari overflow fix */
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  .page__scrollable-content {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 24px;
    overflow: auto;

    @supports (overflow: overlay) {
      overflow: overlay;
    }
  }

  .page__header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    transition: transform 0.3s cubic-bezier(0.2, 0, 0.38, 0.9);
  }

  .page__header.hidden {
    transform: translateY(-80px);
  }

  .page__body {
    position: relative;
    width: 100%;
    min-height: calc(100% - 80px);
  }

  .section__header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

// const ease = BezierEasing(0.2, 0, 0.38, 0.9);

const Page = ({ openDrawer }) => {
  const openDrawerProps = useSpring({
    // config: { duration: 250, easing: ease },
    // width: openDrawer ? "calc(100% - 382px)" : "calc(100% - 56px)"
  });

  const [hiddenHeader, setHiddenHeader] = useState(false);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;

    if ((scrollTop > 30 && !hiddenHeader) || (scrollTop < 30 && hiddenHeader)) {
      setHiddenHeader(!hiddenHeader);
    }
  };

  return (
    <StyledPage style={{ ...openDrawerProps }} className="page">
      <div
        className="page__scrollable-content"
        onScroll={(e) => handleScroll(e)}
      >
        <div className="page__body">
          <Container className="body__container">
            <section className="padding-h40">
              <header className="section__header">
                <div>
                  <Type1>Actions </Type1>
                  <Type3 classNane="subtitle" style={{ color: "#8492A6" }}>
                    Here are all your actions
                  </Type3>
                </div>
              </header>
              <CardGrid
                cards={[...content.cards2]}
                easeSpeed={0.15}
                easeFunction={content.ease}
                avatar={content.avatar}
              />
            </section>
            <br />
            <br />
          </Container>
        </div>
      </div>
    </StyledPage>
  );
};

export default Page;
