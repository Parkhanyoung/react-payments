# 페이먼트 기능 목록

## pages

- MyCard
  - 빈 카드를 누르면 AddCard 페이지로 이동한다.
- AddCard
  - 뒤로가기 버튼 클릭 시 MyCard 페이지로 이동한다.
  - 다음 버튼 클릭 시 카드를 등록하고 MyCard 페이지로 이동한다.

## components

- Page
  - 공통되는 페이지를 관리한다.
- Header
  - Header 문구와 뒤로가기 버튼을 관리한다.
- Button
- Card
  - input form에 입력되고 있는 카드 정보를 보여준다.
- CardInput
  - 입력을 받아야 한다,
  1. 카드 번호
     - 숫자만 가능
     - 네자리 숫자로 나뉜다.
     - 16개까지만 숫자 입력이 가능
     - 뒤의 8자리 숫자는 안 보이도록 보안 처리를 한다.
  2. 만료일
     - 숫자만 가능
     - 앞의 두 자리 숫자는 01~12까지 달 입력
     - 뒤의 두 자리 숫자는 현재 연도(23)부터 10년까지 입력 가능
     - 중간에 /로 숫자가 나뉨
  3. 소유자 이름
     - 문자만 가능
     - 대문자로 변형
     - 선택임(쓸 수 있고 안 쓸 수도 있고)
     - 30자까지만 작성 가능
  4. 보안코드, 카드 비밀번호
     - 숫자만 가능
     - 최대 입력 숫자 각각 3, 1
     - 보안 처리를 적용해 안 보이도록 함"
- CardInputForm
  - input 종류에 맞는 예외를 보여준다.
  - card input들을 관리한다.