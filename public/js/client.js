let notifyWorker = new Worker("js/web-worker.js");

notifyWorker.onmessage =  (e) => {
    const newMessage = (permission) => {
        if (permission !== "granted") {
            return false;
        }
        let notify = new Notification(e.data.message);
    }

    Notification.requestPermission(newMessage);
}







