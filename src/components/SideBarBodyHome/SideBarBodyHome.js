import React from "react";

import "./sidebarbodyhome.scss";
import WrapperSection1And2 from "./WrapperSection1And2/WrapperSection1And2";
import StoryHot from "./StoryHot/StoryHot";
import StoryTopWrapper from "./StoryTopWrapper/StoryTopWrapper";
import TopStoryAndPerson from "./TopStoryAndPerson/TopStoryAndPerson";
import NewComments from "./NewComments/NewComments";

const SideBarBodyHome = () => {
  return (
    <div className="side-bar-body-home">
      <WrapperSection1And2 title="Truyện đang theo dõi" watchMore>
        <StoryHot read />
        <StoryHot read />
        <StoryHot read />
        <StoryHot read />
      </WrapperSection1And2>
      <WrapperSection1And2 title="Lịch sử đọc truyện" watchMore>
        <StoryHot delete />
        <StoryHot delete />
        <StoryHot delete />
        <StoryHot delete />
      </WrapperSection1And2>
      <StoryTopWrapper>
        <TopStoryAndPerson name="Võ Luyện Đỉnh phong" rankNumber={1} />
        <TopStoryAndPerson name="Võ Luyện Đỉnh phong" rankNumber={2} />
        <TopStoryAndPerson name="Võ Luyện Đỉnh phong" rankNumber={3} />
        <TopStoryAndPerson name="Võ Luyện Đỉnh phong" rankNumber={4} />
        <TopStoryAndPerson name="Võ Luyện Đỉnh phong" rankNumber={5} />
        <TopStoryAndPerson name="Võ Luyện Đỉnh phong" rankNumber={6} />
        <TopStoryAndPerson name="Võ Luyện Đỉnh phong" rankNumber={7} />
      </StoryTopWrapper>
      <WrapperSection1And2 title="Top thành viên">
        <TopStoryAndPerson name="Thiên tầm bảo" person rankNumber={1} />
        <TopStoryAndPerson name="Thiên tầm bảo" person rankNumber={2} />
        <TopStoryAndPerson name="Thiên tầm bảo" person rankNumber={3} />
        <TopStoryAndPerson name="Thiên tầm bảo" person rankNumber={4} />
        <TopStoryAndPerson name="Thiên tầm bảo" person rankNumber={5} />
      </WrapperSection1And2>
      <WrapperSection1And2 title="Bình luận mới">
        <NewComments />
      </WrapperSection1And2>
    </div>
  );
};

export default SideBarBodyHome;
