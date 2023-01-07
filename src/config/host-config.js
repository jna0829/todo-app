
//브라우저가 현재의 클라이언트 호스트 이름을 얻어오는 방법 (조건 && && )
const hostname = window && window.location && window.location.hostname;

console.log('현재호스트: ', hostname);


let backendHost; //백엔드 호스트 이름
if(hostname === 'localhost'){
    // 서버 배포되는 곳으로 수정
    backendHost = 'http://localhost:8181'
} else if (hostname === 'todo-react-sj.s3-website.ap-northeast-2.amazonaws.com') {
    backendHost = 'http://ec2-15-164-59-39.ap-northeast-2.compute.amazonaws.com';
}

export const API_BASE_URL = `${backendHost}`;

