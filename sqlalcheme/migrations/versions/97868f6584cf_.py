 """empty message

Revision ID: 97868f6584cf
Revises: 
Create Date: 2021-04-04 14:45:48.322746

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '97868f6584cf'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('person', sa.Column('age', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('person', 'age')
    # ### end Alembic commands ###
