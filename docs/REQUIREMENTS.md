# react-payments
- 스타일링 : styled-components
1. 사용자 관점에서 보이는 기능들을 기준으로 분류
2. 개발자 관점에서 컴포넌트 기준으로 분류

# 기능 요구 사항 분석
- [x] 카드 번호를 입력한다. (입력이 유효하지 않은 경우 에러 메세지 출력)
  - [x] 4자리 숫자만 입력할 수 있다.
  - [x] 카드 번호 뒤의 8자리는 `*` 로 표시한다.
- [x] 입력한 카드 번호에 맞는 브랜드 로고를 UI에 표시한다. (해당하는 경우)
  - [x] Visa: 4로 시작하는 16자리 숫자
  - [x] MasterCard: 51~55로 시작하는 16자리 숫자
- [x] 카드 유효기간을 입력한다. (입력이 유효하지 않은 경우 에러 메세지 출력)
  - [x] 월(1월~12월)과 년도(2024년~2040년)를 범위 내에서만 입력할 수 있다.
  - [x] 숫자만 입력할 수 있다.
- [x] 카드 소유자 이름을 입력한다. (입력이 유효하지 않은 경우 에러 메세지 출력)
  - [x] 영문자 대문자만 입력할 수 있다.
  - [x] 이름은 100자 내로 입력할 수 있다.
  - [x] 소문자로 입력해도 대문자로 자동 변환된다. (optional)
- [x] 실시간으로 입력하는 카드 정보를 보여준다.

# 컴포넌트 설계
- 공통 컴포넌트
  - Input
  - RegistrationLayout

- 컴포넌트
  - CardPreview (카드 프리뷰)
  - CardNumberContainer (카드 번호)
  - CardExpiryDateContainer (카드 유효기간)
  - CardholderNameContainer (카드 소유자 이름)

# 피드백 반영 및 리팩토링
- [ ] useInput, useInputs의 인터페이스를 통일한다. (혹은 useInputs를 없애고 useCardNumberInputs와 같은 훅을 만든다)
- [ ] useInput/useInputs에서 유효성 검증/에러 메시지 처리 책임을 별도의 훅으로 분리한다.
- [ ] inquire 함수에서 빈 문자열 대신 isError를 별도로 반환하도록 수정
- [ ] convertArrayIntoObject 함수를 별도의 파일로 분리 / forEach -> reduce
- [ ] 월 입력 시 한 자리를 입력했을 떄 blur 시 두 자리로 수정
- [ ] APP이 너무 많은 정보를 다루고 있음 -> 카드 정보를 모두 관리하는 커스텀훅을 만들기
- [ ] 카드 브랜드 로고 컴포넌트 추가
- [ ] styled component 색상을 변수로 두기
- [ ] 커스텀 훅 내의 함수 생성을 useCallback으로 메모이제이션
- [ ] 매직 넘버를 변수로 선언
- [ ] 카드번호 유효성 검증 로직 수정 (7AA7과 같은 입력값이 통과되고 있음)
- [ ] placeholder를 예시 문구로 수정
- [ ] renaming이 많이 이뤄진다면 rest 파라미터를 고려
- [ ] 형변환을 보다 명시적으로 수행
- [ ] inquire 네이밍 개선

