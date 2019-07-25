export default function day_month_year(dateInMilliseconds) {
    let time = new Date(dateInMilliseconds);
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    let result = time.toLocaleDateString('es-ES', options);
    return time.toLocaleString();
}