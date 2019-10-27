class User:
    def __init__ (self,e_mail,psw,ident = None,id_role = None):
        self._id = ident 
        self._e_mail = e_mail
        self._psw = psw
        self._id_role = id_role 

    #getter
    @property
    def e_mail (self):
        return self._e_mail

    #setter
    @e_mail.setter
    def e_mail (self, new):
        self._e_mail = new

    @property
    def psw (self):
        return self._psw

    @psw.setter
    def psw (self, new):
        self._psw = new

    @property
    def id (self):
        return self._id

    @id.setter
    def id (self, new):
        self._id = new

    @property
    def id_role (self):
        return self._id_role

    @id_role.setter
    def id_role (self, new):
        self._id_role = new



