export const convertTime = (value) => {
    const time = Number(value ? value : 0);
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}:${minutes?.toFixed(0)?.padStart(2, '0')}`;
}
