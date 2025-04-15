
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.background = '#F4F1FD';
  document.body.style.fontFamily = 'Arial, sans-serif';
  document.body.style.margin = '0';
  document.body.innerHTML = `
    <div style="padding: 2rem; max-width: 800px; margin: 5rem auto; background: white; border-radius: 1rem; box-shadow: 0 0 20px rgba(0,0,0,0.1); text-align: center;">
      <h1 style="color: #5E3FD7; font-size: 2.5rem;">🎉 Dentlink Dashboard by Briley</h1>
      <p style="font-size: 1.2rem; color: #444;">이 화면이 보인다면 <strong>자동 배포에 성공</strong>한 것입니다!</p>
      <p style="font-size: 1rem; margin-top: 1rem;">📊 다음 단계: Google Sheets 연동, 차트 삽입, 실시간 필터 등 확장 가능!</p>
    </div>
  `;
});
