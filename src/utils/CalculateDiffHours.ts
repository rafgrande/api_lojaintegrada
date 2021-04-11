const CalculateDiffHours = (dateError: Date): number => {
    let diff = (dateError.getTime() - Date.now())/1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
}

export default CalculateDiffHours;