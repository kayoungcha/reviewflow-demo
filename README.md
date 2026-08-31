## ReviewFlow 연동 검증

이 저장소는 별도 프로젝트에 ReviewFlow 워크플로를 설치한 뒤, Pull Request 생성만으로 다음 과정이 자동 실행되는지 검증합니다.

- GitHub Pull Request 정보 수집
- 브랜치명에서 Jira 티켓 키 식별
- Jira 요구사항 조회
- OpenAI 코드 리뷰 실행
- Pull Request 리뷰 댓글 작성
- 최종 판정에 따른 GitHub Actions Check 처리
