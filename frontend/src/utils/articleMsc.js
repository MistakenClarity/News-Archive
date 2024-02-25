export function convertDate({ month, year }) {
    const monthsLet = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthsLet[month - 1] + ", " + year;
}