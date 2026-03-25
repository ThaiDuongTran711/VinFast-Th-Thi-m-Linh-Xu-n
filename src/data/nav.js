const nav = [
  {
    label: "Sản phẩm",
    children: [
      { label: "Dòng xe dịch vụ", to: "/vehicles/service", desc: "VinFast Green Series" },
      { label: "Dòng xe cá nhân", to: "/vehicles/family", desc: "VinFast VF Series" },
      { label: "Dòng xe hạng sang", to: "/vehicles/luxury", desc: "Lac Hong Series" },
    ]
  },
  {
    label: "Trải nghiệm",
    children: [
      { label: "Lái thử", action: "laithu", desc: "Đặt lịch lái thử gần bạn" },
      { label: "Đăng ký tư vấn", action: "tuvan", desc: "Tư vấn nhanh chóng" },
    ]
  },
  {
    label: "Tin tức",
    children: [
      { label: "Bài viết", to: "/news", desc: "Tin mới & sự kiện" },
      { label: "Blog", to: "/blog", desc: "Câu chuyện cộng đồng" },
    ]
  },
  {
    label: "Về VinFast",
    to: "/about"   // Link trực tiếp, không dropdown nữa
  },
]

export default nav
