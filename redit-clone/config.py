class config(object):
    DEBUG = False
    TESTING = False
    SQLALCHEMY_DATABASE_URI = 'sqlite:///test.db'

    db_user       = None
    db_passwords  = None
    db_hosts      = None 
    db_db         = None
    

class ProductionConfig(config):
    pass 

class DevelopmentConfig(config):
    pass