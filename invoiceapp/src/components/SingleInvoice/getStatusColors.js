export const getStatusColors = (statusName) => {
    let color = [];
    switch (statusName) {
        case 'Pending':
            color = [255, 143, 0]
            break;
        case 'Paid':
            color = [51, 214, 159]
            break;
        case 'Draft':
            color = [55, 59, 83]
            break;
        default:
            color = []
            break;
    }
    return color;
}