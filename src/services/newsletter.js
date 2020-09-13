const fs = require('fs')

class NewsLetter {
    _saveToFile(filename, email) {
        try {
            const content = fs.readFileSync(filename, 'utf-8')
            const data = JSON.parse(content)
            data.push(email)
            fs.writeFileSync(filename, JSON.stringify(data))
        } catch (e) {
            console.log(e)
        }
    }

    save(query, file) {
        const uriComponent = decodeURIComponent(query)
        const email = uriComponent.split('=')[1]
        if (email === null || email === '') {
            return
        }

        const filename = file === undefined ?
            __dirname + '/../resources/users.json' : __dirname + '/../resources/' + file

        try {
            fs.readFileSync(filename, 'utf-8')
        } catch (e) {
            fs.appendFileSync(filename, '[]', 'utf-8')
        }

        this._saveToFile(filename, email)
    }
}

module.exports = NewsLetter
