class User:
    def __init__ (self, e_mail,psw):
        self._e_mail = e_mail
        self._psw = psw

    #getter
    @property
    def e_mail (self):
        return self._e_mail

    #setter
    @e_mail.setter
    def e_mail (self, new):
        print ('estoy en el setter')
        self._e_mail = new

    @property
    def psw (self):
        return self._psw

    @psw.setter
    def psw (self, new):
        self._psw = new

user = User('jaja@jaja.com','jaja')

print (user.e_mail)

user.e_mail = 'jeje@jeje.com'

print (user.e_mail)