import telebot


AdminID = 535760757
bot = telebot.TeleBot("5328258522:AAEjwXAkV-q3xJOutj3ES7dYFbX5sWuYf9k",parse_mode=None)
def listen():
  bot.polling(none_stop=True, interval=0)

def SendMessage(name,mail,phone):
  bot.send_message(AdminID,"Name: "+str(name)+"\nTel: "+str(phone)+"\nMail: "+str(mail))
  




