import moment from "moment";

export const analyze = (text) => {
    if (text.includes('hi') || text.includes('hai') || text.includes('hello'))
        return 'Hi, how can I help you?';
    else if (text.includes('date'))
        return moment().format('MMMM Do YYYY');
    else if (text.includes('time'))
        return moment().format('h:mm:ss a');
    else if (text.includes('google link'))
        return 'https://google.com';
    else if (text.includes('interest'))
        return 'Bank interest is 8.7%';
    else if (text.includes('thank you'))
        return 'You are welcome!';
    return 'I didn’t understand that. Can you rephrase it?';
}
