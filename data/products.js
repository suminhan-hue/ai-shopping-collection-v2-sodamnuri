// User: 7722672 = "소담누리" (여, 42세, 아파트 30평대, 배우자+자녀, lifetime_event=계획없음)
// 행동: 욕실/주방/패브릭(커튼/러그/침구) 중심, 검색어 "화이트제품" 등 → 미니멀 화이트 무드 선호
// 추출: 인기 1인용 소파 (review_count > 100) + 화이트/뉴트럴 키워드 필터
// 추출일: 2026-04-27
//
// UT 시나리오:
// q1person ("1인용이 궁금해") → 1인용 8개 (일체형 + 모듈 mix)
// qbudget ("화이트톤만 보여줘") → 화이트톤 1인용 4개 (일체 2 + 모듈 2)
// qbudgetSel ("20만원 아래로만 골라줘") → 같은 4개에서 일체형 1 + 모듈 1 pre-check
// comparison ("내구성은 뭐가 더 좋아?") → 좌측(일체형 4) vs 우측(모듈 4) 비교

window.UT_PRODUCTS = {
  user: { id: 7722672, nickname: "소담누리", residence: "아파트 30평대", family: "배우자, 자녀" },

  // hub 캐러셀: 일반 "쇼핑" 섹션 인기 상품 3개 (리뷰 많은 순)
  hub_carousel: [
    { id: 574524,  brand: "한샘",       name: "[리뷰 12,865개] 눕 리세 아쿠아텍스 3인 패브릭 소파 3colors", price: 268900, discount: "32%", rating: 4.76, reviews: "12,865", img: "574524.jpg" },
    { id: 1435924, brand: "먼데이하우스", name: "[단하루 39.9만] 라운지 구스 패브릭 4인 모듈 소파(쿠션3개)", price: 449000, discount: "29%", rating: 4.7,  reviews: "6,743",  img: "1435924.jpg" },
    { id: 2088501, brand: "바오트가구",   name: "쿠폰가 100,880원 / 앤고 2인 패브릭 소파(쿠션증정)",         price: 104000, discount: "47%", rating: 4.73, reviews: "4,806",  img: "2088501.jpg" }
  ],

  // hub AI 카드 우상단 회전 썸네일 3장 (3개 sub-collection 대표 이미지)
  hub_thumbs: ["1648222.jpg", "1502238.jpg", "2720406.jpg"],

  // shopping 화면 3개 sub-collection — 텍스트는 원본 그대로 ("우드톤 패브릭" / "4인 카우치" / "포근한 모듈")
  // 각 collection 6개 unique 상품: bigs[2] + smalls[4] → 캐러셀 패턴 [BIG_1, stack(s_0,s_1), BIG_2, stack(s_2,s_3)]
  shopping_collections: [
    {
      // 우드톤 패브릭 소파 — 베이지/뉴트럴 톤 패브릭 (다인용 위주)
      name: "우드톤 패브릭 소파",
      chip_name: "우드톤 패브릭 소파",
      bigs: [
        { id: 267162,  name: "DK010 4인 베이지 풀커버 패브릭 소파",       price: 668900, img: "267162.jpg" },
        { id: 267116,  name: "DK051 3.5인 베이지 워셔블 풀커버 패브릭",   price: 589900, img: "267116.jpg" }
      ],
      smalls: [
        { id: 384630,  name: "아쿠아 론 4인 패브릭 소파",                 price: 389000, img: "384630.jpg" },
        { id: 1330506, name: "헤리티지 4인 조야 패브릭 스윙",             price: 559000, img: "1330506.jpg" },
        { id: 3415754, name: "구스 스윙 크림화이트 3/4인",                price: 449000, img: "3415754.jpg" },
        { id: 384634,  name: "아쿠아 론 카우치 4인 패브릭",               price: 489000, img: "384634.jpg" }
      ]
    },
    {
      // 우드 프레임 모듈 소파 — 모듈형 + 우드 다리/원목 프레임 느낌
      name: "우드 프레임 모듈 소파",
      chip_name: "우드 프레임 모듈 소파",
      bigs: [
        { id: 1502238, name: "한샘 눕 데일리 구스 4인 모듈",             price: 648900, img: "1502238.jpg" },
        { id: 1443526, name: "하임 3인 프리미엄 패브릭 모듈",             price: 299000, img: "1443526.jpg" }
      ],
      smalls: [
        { id: 1435924, name: "라운지 구스 4인 모듈",                     price: 449000, img: "1435924.jpg" },
        { id: 2720406, name: "포레스트 4인 워셔블 모듈",                  price: 499000, img: "2720406.jpg" },
        { id: 971178,  name: "마치 3인 모듈",                            price: 299000, img: "971178.jpg"  },
        { id: 542990,  name: "동백 2400 3인 조야 스윙 모듈",              price: 399000, img: "542990.jpg" }
      ]
    },
    {
      // 라운드 엣지 4인 패브릭 소파 — 4인 둥근 모서리 패브릭
      name: "라운드 엣지 4인 패브릭 소파",
      chip_name: "라운드 엣지 4인 패브릭",
      bigs: [
        { id: 1287332, name: "몬스터 아쿠아 4인 패브릭",                  price: 299000, img: "1287332.jpg" },
        { id: 2121820, name: "몽드 4인 조야 스윙 카우치",                 price: 649000, img: "2121820.jpg" }
      ],
      smalls: [
        { id: 446263,  name: "베니스 타이보 4인 코모도 패브릭",           price: 399000, img: "446263.jpg"  },
        { id: 1106436, name: "몬스터 4인 아쿠아 클린 패브릭",             price: 579000, img: "1106436.jpg" },
        { id: 3326382, name: "고스트 타이보 4인 카우치",                  price: 419000, img: "3326382.jpg" },
        { id: 361775,  name: "클라우드 DK090 4인 풀커버",                 price: 767900, img: "361775.jpg"  }
      ]
    }
  ],

  // q1person 8개 그리드 — "1인용이 궁금해" → 다양한 1인용 (일체형 + 모듈, 화이트/뉴트럴 톤)
  q1person: [
    { id: 2359951, name: "이든 부클레 1인",         price: 198000, img: "2359951.jpg" },
    { id: 2471071, name: "리움 1인 모듈",           price: 139000, img: "2471071.jpg" },
    { id: 1490491, name: "바비 양털 부클레 1인",    price: 189000, img: "1490491.jpg" },
    { id: 870358,  name: "빈 샤샤 양털 구름 1인",   price: 248000, img: "870358.jpg"  },
    { id: 1648222, name: "올리브 도넛 1인",         price: 449000, img: "1648222.jpg" },
    { id: 1502240, name: "한샘 눕 1인 암리스",      price: 176900, img: "1502240.jpg" },
    { id: 32151,   name: "타미 1인 패브릭",         price: 129000, img: "32151.jpg"   },
    { id: 1579235, name: "애스턴 원목 1인",         price: 228000, img: "1579235.jpg" }
  ],

  // qbudget 4개 — "화이트톤만 보여줘" → 모두 화이트 컨펌된 1인용 (일체형 2 + 모듈 2 mix)
  qbudget: [
    { id: 870358,  name: "빈 샤샤 양털 구름 1인",   price: 248000, img: "870358.jpg"  },  // 일체형 [pre-check]
    { id: 2471071, name: "리움 1인 모듈",           price: 139000, img: "2471071.jpg" },  // 모듈 [pre-check]
    { id: 32151,   name: "타미 1인 패브릭",         price: 129000, img: "32151.jpg"   },  // 일체형
    { id: 1502240, name: "한샘 눕 1인 암리스",      price: 176900, img: "1502240.jpg" }   // 모듈
  ],

  // comparison — 좌(일체형/라운드 구조: 디자인 깔끔, 이음새 적음) vs 우(모듈형/쿠션 분리: 꺼짐 시 쿠션 교체)
  // selected_*: 사용자 선택 2개 (cmp-imgs 상단)
  // left/right: 비슷한 상품 4개씩 (selected와 중복 없음)
  comparison: {
    selected_left:  { id: 870358,  name: "빈 샤샤 양털 구름",  price: 248000, img: "870358.jpg"  },
    selected_right: { id: 2471071, name: "리움 1인 모듈",      price: 139000, img: "2471071.jpg" },
    left:  [
      { id: 32151,   name: "타미 1인 패브릭",       price: 129000, img: "32151.jpg"   },
      { id: 1648222, name: "올리브 도넛 1인",       price: 449000, img: "1648222.jpg" },
      { id: 1579235, name: "애스턴 원목 1인",       price: 228000, img: "1579235.jpg" },
      { id: 1490491, name: "바비 양털 부클레",      price: 189000, img: "1490491.jpg" }
    ],
    right: [
      { id: 1502240, name: "한샘 눕 1인 암리스",    price: 176900, img: "1502240.jpg" },
      { id: 1502238, name: "한샘 눕 4인 모듈",      price: 648900, img: "1502238.jpg" },
      { id: 2720406, name: "포레스트 4인 모듈",     price: 499000, img: "2720406.jpg" },
      { id: 1435924, name: "라운지 구스 4인 모듈",  price: 449000, img: "1435924.jpg" }
    ]
  },

  // AI 메시지 — Figma 원본 그대로 복원
  ai_messages: {
    hub:        { title: "AI 상품 에이전트", body: "감성 거실 콘텐츠를 자주 찾아보셔서\n어울리는 소파들로 모아봤어요" },
    shopping:   {
      title: "소담누리님 관심사에 맞는 소파 모음",
      body:  "아이와 함께 쓰는 거실에 어울리는\n포근한 패브릭·라운드 엣지 소파를 모아봤어요",
      lifestyle_label: "이 추천과 연관된 소담누리님의 라이프스타일",
      lifestyle_items: ["내추럴 미니멀 · 수납 중시"]
    },
    shopping_short: "최근 30일간 조회한 탐색 기록을 분석했어요",
    // q1person: 1인용 추천
    q1person: {
      user_query: "1인용이 궁금해",
      history: "유저 라이프스타일과 구매자 리뷰를 분석했어요",
      desc: "혼자만의 시간이 필요할 때, 거실 한 켠에 두면 좋을 소파를 찾으시나요? 즐겨보신 미니멀 화이트 무드에 맞춰 골라봤어요",
      thinking: "분석 중...",
      chips: ["화이트톤만 보여줘", "미니멀한 디자인으로", "관리 쉬운 패브릭"]
    },
    // qbudget: 화이트톤 필터 (chips는 dual-state로 HTML에서 제어 — initial: 일반 follow-up, selected: 비교 진입)
    qbudget: {
      user_query: "화이트톤만 보여줘",
      history: "평소 즐겨보신 화이트 무드를 반영했어요",
      desc: "여백을 살리기엔 화이트만 한 게 없죠! 즐겨 보신 미니멀 화이트 무드에 녹아들 수 있도록 골라봤어요",
      thinking: "화이트 무드로 다시 골라볼게요..."
      // chips는 HTML이 제어 (data-state="initial"/"selected" 토글)
    },
    // qbudgetSel: 예산 필터 + 선택 상태
    qbudgetSel: {
      user_query: "20만 원 아래로만 골라줘",
      history: "최근 30일간 조회한 탐색 기록과 구매자 리뷰를 분석했어요",
      desc: "혼자만의 자리를 만들기에 좋은 1인용이죠.\n최근 탐색하신 우드톤 패브릭 소파에 맞게 골라봤어요",
      chips: ["내구성은 뭐가 더 좋아?", "2인용도 있어?", "좁은 방엔 뭐가 나아?"]
    },
    // comparison: 두 상품 비교
    comparison: {
      user_query: "내구성은 뭐가 더 좋아?",
      history: "아이 있는 집의 사용 후기를 중심으로 비교했어요",
      desc: "오래 두고 쓰실 거라면, 쿠션만 따로 교체할 수 있는 오른쪽이 더 좋아요",
      thinking: "두 상품 비교 중...",
      chips: ["세탁이나 청소 방식이 궁금해", "비슷한 가격대에 더 좋은 것도 있어?"],
      left_title: "왼쪽 소파",
      left_details: [
        "일체형 + 라운드 구조",
        "장점: 디자인 깔끔, 이음새 적음",
        "단점:",
        ["꺼짐 생기면 복구 어려움", "오염 시 부분 관리 힘듦", "형태 무너지면 전체 교체 느낌"]
      ],
      right_title: "오른쪽 소파",
      right_details: [
        "모듈형 + 쿠션 분리 구조",
        "장점:",
        ["꺼짐 생겨도 쿠션만 교체/뒤집기 가능", "오염 관리 쉬움", "하중 분산돼서 프레임 부담 적음"],
        "단점: 디자인은 덜 미니멀"
      ]
    }
  }
};
