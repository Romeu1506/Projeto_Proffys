const database = require('./db')
const createProffy = require('./createProffy')

database.then(async (db) => {
    //Inserir dados

    proffyValue = {
        name: "Romeu Junior", 
        avatar: "'https://avatars0.githubusercontent.com/u/6906516?s=200&v=4'", 
        whatsapp: "11964399248", 
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 11, 
        cost: "500", 
      }
      classScheduleValues = [
        {
          weekday: 1,
          time_from: 1200,
          time_to: 1800
        },
        {
          weekday: 0,
          time_from: 520,
          time_to: 1220
        }
      ]
    
      const selectedProffys = await db.all("SELECT * FROM proffys")
    
      const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
      `)
      const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
      `)
    })