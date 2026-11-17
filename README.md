# THIT_HOMEPAGE

SBT Global의 정보 구조와 레이아웃을 REA로 관찰하여 THIT 브랜드로 새롭게 구현한 Vue 3 + Vite 사이트입니다.

## 실행

```sh
npm ci
npm run dev -- --host 0.0.0.0
```

`npm run build`로 정적 배포 파일을 `dist/`에 생성합니다. `npm run preview`로 빌드를 확인합니다.

## 콘텐츠와 문의

- 회사 정체성: THIT_기업정체성_브랜드전략.docx (2026-11-13)
- 로고: 사용자가 제공한 THIT JPG 원본
- 연락처: 기존 THIT_HOMEPAGE의 `src/data/site.js`에서 가져왔으며 현재 프로젝트의 `src/company.js`에서 수정할 수 있습니다.
- AI 컨설팅은 문서에 따라 확장 계획으로 명시했습니다.
- 문의 폼은 mailto 방식이며 서버에 저장하거나 메일을 자동 발송하지 않습니다. 방문자가 메일 앱에서 직접 전송합니다.
- 원본 회사의 고객 로고·실적·보유 솔루션·광고 팝업은 THIT의 사실로 사용하지 않았습니다.
- 웹폰트는 Google Fonts를 사용하며 네트워크가 없으면 시스템 글꼴로 표시됩니다.

분석과 검증 범위는 `docs/reconstruction.md`에 기록했습니다.

## CI/CD — GitHub Actions / Pages

- PR과 `main` push에서 Node.js 24, `npm ci`, 프로덕션 빌드, 배포 경로·산출물 검증을 실행합니다.
- Pages를 활성화하고 저장소 Actions 변수 `PAGES_ENABLED`를 `true`로 설정하면, `main`의 검증된 산출물이 자동 배포됩니다. PR에서는 배포하지 않습니다.
- 배포 주소: https://KimJongTae.github.io/THIT_HOMEPAGE/
- 워크플로: `.github/workflows/pages.yml`. Actions 탭에서 수동 실행도 가능합니다.
- Pages의 Source는 **GitHub Actions**를 사용합니다. 토큰을 직접 저장할 필요 없이 배포 작업의 `GITHUB_TOKEN`과 OIDC를 사용합니다.
- 저장소는 사용자 승인으로 공개 전환했고 Pages를 활성화했습니다. `PAGES_ENABLED=true`가 설정되어 있습니다. 배포를 잠시 중지하려면 이 변수를 `false`로 변경하면 빌드 검증만 계속됩니다.
- 배포 실패 시 Actions의 실패 단계 로그를 확인합니다. 이전 버전으로 복구하려면 해당 변경을 revert하고 `main`에 push합니다.

로컬에서 동일한 산출물 검증:

```sh
npm ci
npm run build -- --base /THIT_HOMEPAGE/
npm run check:build -- /THIT_HOMEPAGE/
```
