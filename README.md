# 45_GreenCup 기후변화 대응 프로젝트 
visit GreenCup (https://greencup-458a9.web.app)

## GreenCup이란❓
◽ 자연환경을 뜻하는 초록색의 컵으로 일회용컵 문제 해결에 도움을 주는 웹 

## 소개
DSC Korea Solution Challenge Hackathon 2022의 주제 중 기후 변화 대응 솔루션을 제시한 웹이다. 
코로나 이후 일회용품 사용이 증가했고 당장 6월에 보증금 제도가 실시되어 혼란이 있을거라 예상했다. 특히 보증금 제도에 주목해 이를 활용할 방안을 고민했다. 
리유저블컵이나 텀블러 사용은 Greencup을, 반납할 일회용컵은 Blackcup을 의미한다. 
로그인한 사용자는 지도 메뉴를 클릭해 매장마다 컵의 사용 내역을 확인할 수 있다. 개인 페이지에서는 자신의 총 사용내역을 볼 수 있다. 한컵두컵 그린컵은 한푼두푼에서 따온 메뉴로 주식 소수점 거래를 할 수 있도록 각 증권사 페이지로 연결된다.
우리 지역 통계에서는 지역마다 컵 사용량에 대한 시계열 데이터셋을 구축해 사용량에 대한 예측을 그래프를 통해 보인다. 

## Development methods
GreenCup 프로젝트는 HTML, CSS, JS, firebase, 지도 api, tensorflow를 활용한 웹 서비스이다. 파이어베이스를 이용해 구글 로그인을 구현하고
배포했다. 지도 API는 네이버, 카카오를 이용했고 현재 시간 구현은 자바스크립트 API를 이용했다. 시계열 데이터를 위한 딥러닝 모델은 텐서플로우를 사용했다.