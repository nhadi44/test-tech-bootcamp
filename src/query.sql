#Input data user
insert into users_tb (name, photo) values('meliodas','meliodas.jpg')
insert into users_tb (name, photo) values('ban','ban.jpg')
insert into users_tb (name, photo) values('king','king.jpg')

#Input Data Skill
insert into skill_tb (name, user_id) values('full counter','1')
insert into skill_tb (name, user_id) values('snatch','2')
insert into skill_tb (name, user_id) values('disaster','3')

# Menampilkan seluruh data dari table user dan skill user
select * from users_tb
inner join skill_tb on (skill_tb.user_id = users_tb.id)

#menampilkan data user berdasarkan skill
select * from users_tb
inner join skill_tb on (skill_tb.user_id = users_tb.id)
where skill_tb.name = 'full counter'

#Menampilkan spesifikasi user dengan skillnya
select users_tb.name, skill_tb.name as skill from users_tb
inner join skill_tb on (skill_tb.user_id = users_tb.id)
where users_tb.name = 'meliodas'
