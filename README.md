# Web-Application-Server-Practice

-------------------------

2월 5일 수요일

  - login email, password를 post로 보내고 로그인 성공 시 jwt-token 발행하는 controller 추가

-------------------------

2월 3일 월요일

  - 토큰 발행 시에만 board로 들어갈 수 있도록 권한 설정

-------------------------

1월 31일 금요일

  - login 시 jsonwebtoken 발행 기능 추가
  - config/jwt.js에서 secretkey 생성

-------------------------

1월 30일 목요일

  - login view, routes 기능 추가
  - express-session module 설치 및 기능 추가
  - passport 추가 (미완성)
  - jsonwebtoken 추가 (미완성)
  - passport, passport-jwt, passport-local, jsonwebtoken module 설치

-------------------------

1월 29일 수요일

  - 비밀번호 salt 추가
  - passport, passport-local, passport-jwt, jsonwebtoken module 추가
  - jwt 인증 추가

-------------------------

1월 28일 화요일

  - 회원가입 view, sequelize, migration 추가

-------------------------

1월 23일 목요일

  - reply migrate 추가, reply commit

-------------------------

1월 22일 수요일

  - CRUD routes & Views 추가, CRUD commit

-------------------------

1월 21일 화요일

  - sequelize 설치, migration commit
  
        # npm install mysql2 sequelize
        # npm install -g sequelize-cli
        # sequelize init
        
  - db migration 정의 및 실행
  
        # sequelize db:migrate

-------------------------

1월 20일 월요일

  - 프로젝트 생성, 1/20 commit
  
        # express -e seq-crud-exam

  - 간단한 테스트 api 작성, 1/20 apitest commit
  
     controllers/index
     
     routes/index
