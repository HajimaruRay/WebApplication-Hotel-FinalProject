export async function getCurrentTime(currentTime) {
  const date = new Date(currentTime);

  const thaiTime = new Intl.DateTimeFormat('th-TH', {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(date);

  return thaiTime.replace(',', '');
}
