import cron from 'node-cron'

cron.schedule('* * * * *', () => {
	// query db
	// compare time db with current time
	// run exec
})

setInterval(() => {
	// SELECT exec, name FROM schedule WHERE (minute = minute() OR NULL) AND (hour = hour() OR hour = NULL) AND (date = date() OR date = NULL) AND (week = week() OR week = NULL) AND (month = month() OR month = NULL)
	// query db
	// compare time db with current time
	// run exec
}, 1000 * 64)
