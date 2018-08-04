class Utils {
    formatDate(date) {
        return new date(date).getTime() / 1000;
    }
}
export default new Utils();
