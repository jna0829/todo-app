// 페이지 전환 담당

import React from "react";

// 라우팅에 사용할 라이브러리
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Join from "../components/Join";
import Header from "../components/Header";

const AppRouter = () => {
    return (
        <>
            <Header />

            <Routes>
                {/* 뜻 : "/" 경로로 요청하면 App컴포넌트를 렌더링하세요 */}
                <Route path="/" element={<App />} />
                {/* 뜻 : "/login" 경로로 요청하면 Login컴포넌트를 렌더링하세요 */}
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
            </Routes>
        </>
    );
};

export default AppRouter;

