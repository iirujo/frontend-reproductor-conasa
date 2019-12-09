export default class Shorten {
    checkAndShortString(title) {
        if (title.length > 23) {
            var shorter = title.substr(0, 20);
            shorter = shorter + "...";
            return shorter;
        }
        return title;
    }
}