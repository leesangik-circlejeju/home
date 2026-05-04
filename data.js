/* 
   동그라미교육원 통합 데이터베이스 (기획 최종본)
*/

const DB = {
    programs: [
        {
            id: "p1", title: "난독 개선 프로그램", icon: "fas fa-book-reader",
            summary: "시지각, 언어, 뇌기능 통합 재활을 통해 읽기 경로를 과학적으로 회복합니다.",
            description: "전산화된 시지각 훈련 소프트웨어와 음운 인식 강화를 통해 읽기 유창성과 이해력을 근본적으로 개선합니다.",
            tech: ["시지각향상훈련", "인지기능 향상훈련", "언어기능 향상훈련", "난독특화훈련", "난독검사"],
            linkedVouchers: ["v_h"],
            url: "난독개선프로그램.html"
        },
        {
            id: "p2", title: "경계선지능 개선", icon: "fas fa-brain",
            summary: "0.3초 이내의 빠른 피드백 훈련으로 뇌가소성을 극대화하고 처리 속도를 높입니다.",
            description: "전산화 인지 치료(CBT)를 통해 작업 기억과 실행 기능을 정량적으로 강화합니다.",
            tech: ["CBT 시스템", "0.3초 반응 훈련", "도미넌트 가속화"],
            linkedVouchers: ["v_g"],
            url: "경계선지능.html"
        },
        {
            id: "p3", title: "ADHD/자폐/발달재활", icon: "fas fa-puzzle-piece",
            summary: "소리뇌파 기술과 충동 억제 훈련을 통한 행동 제어 및 정서 안정 솔루션.",
            description: "특정 주파수를 활용한 뇌파 동기화 기술과 3단계 충동성 억제 프로그램을 적용합니다.",
            tech: ["소리뇌파 기술", "3단계 충동 억제", "사회인지 훈련"],
            linkedVouchers: ["v_a", "v_d"],
            url: "ADHD.html"
        },
        {
            id: "p4", title: "언어능력 향상 훈련", icon: "fas fa-comments",
            summary: "언어심리학 기반의 음성 분석 소프트웨어를 활용한 정밀 발음 및 표현 교정.",
            description: "스피치마스터 및 피치마스터를 활용하여 실시간 음성 스펙트럼을 분석합니다.",
            tech: ["스피치마스터", "피치마스터", "음성 분석 SW"],
            linkedVouchers: ["v_b"],
            url: "언어능력향상.html"
        },
        {
            id: "p5", title: "첨단인지 재활 치료", icon: "fas fa-microchip",
            summary: "메타인지 강화와 좌우뇌 균형 훈련으로 학습 효율성과 인지 기능을 극대화합니다.",
            description: "비침습적 장비를 통한 뇌 균형 재활로 증상의 근본 원인을 해결합니다.",
            tech: ["메타인지 전략", "뇌 균형 재활 장비"],
            linkedVouchers: ["v_d"],
            url: "첨단인지재활프로그램.html"
        },
        {
            id: "p6", title: "첨단인지 검사 프로그램", icon: "fas fa-vial",
            summary: "K-MVPT 및 Brain Memory 검사를 통한 객관적 상태 진단 및 데이터 리포트.",
            description: "전두엽 기능과 시지각 능력을 수치화하여 지능발달, 난독등을 검사합니다.",
            tech: ["K-MVPT 검사", "Brain Memory 검사"],
            linkedVouchers: ["v_h", "v_g"],
            url: "첨단인지검사프로그램.html"
        }
    ],
    vouchers: [
        { id: "v_a", cat: "baby", title: "영유아 발달 지원 서비스", info: "지역 사회 서비스", icon: "fas fa-baby" },
        { id: "v_b", cat: "baby", title: "아동 청소년 심리 지원", info: "지역 사회 서비스", icon: "fas fa-child" },
        { id: "v_c", cat: "baby", title: "성인 재활 심리 지원", info: "지역 사회 서비스", icon: "fas fa-user-graduate" },
        { id: "v_d", cat: "adult", title: "발달재활 서비스", info: "보건복지부", icon: "fas fa-hand-holding-heart" },
        { id: "v_e", cat: "edu", title: "희망 나눔 카드", info: "제주도 교육청", icon: "fas fa-credit-card" },
        { id: "v_f", cat: "edu", title: "장애 유아 치료 카드", info: "제주도 교육청", icon: "fas fa-id-card-alt" },
        { id: "v_g", cat: "edu", title: "경계선 지능 치료비 지원", info: "제주도 교육청", icon: "fas fa-brain" },
        { id: "v_h", cat: "edu", title: "난독 난산 서비스", info: "제주도 교육청", icon: "fas fa-book-reader" }
    ]
};
