describe('App tests', () =>{
    
    let page = global.page

    test('Loads all elements', async () => {

        const testData = [
            { name: 'Munya Denhere', role: 'Software Engineer' },
            { name: 'Ziyanda Gunuza', role: 'Web Developer' },
            { name: 'Tamara Nyapimbi', role: 'Full Stack Developer' }
        ]

        await page.waitForFunction('document.getElementById("devForm")')

        // Type all the Input data in the Textboxes

        for(let i = 0; i < testData.length; i++) {
            await page.type("input[name='name']", testData[i].name)
            await page.type("input[name='role']", testData[i].role)
            await page.click("input[type='submit']")
        }

        // Check if all the data is represented in the table
        for(let i = 0; i < testData.length; i++){
            expect(await page.$eval(`#name${i}`, element => element.innerText))
                .toEqual(testData[i].name)
            expect(await page.$eval(`#role${i}`, element => element.innerText))
                .toEqual(testData[i].role)
        }
    });
})