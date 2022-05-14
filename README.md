# API

Портал

```sh
профиль

Загрузка фото профиля:
POST: https://dev1cabinet.chatapp.online/profile/image/update
{
    "profile_image": "binnary file"
}

Обновление информации о пользователе:
POST: https://dev1cabinet.chatapp.online/profile/update
{
    "name": "Test",
    "password": "ps",
    "new_password": "ps1",
    "new_password_confirmation": "ps1",
}

Получение информации о пользователе:
GET: https://dev1cabinet.chatapp.online/member/4570/profile/data



# ................................................................................
порталы
https://dev1cabinet.chatapp.online/portals
# Список
GET: https://dev1cabinet.chatapp.online/portals/list

# Создать Портал
POST: https://dev1cabinet.chatapp.online/portals/create
{
  "name": "test",
  "crm": {
    "type": "Bitrix",
    "domain": "test.asd.com",
  },
  "image": "file"
}

# Обновить портал
POST: https://dev1cabinet.chatapp.online/portals/update/{portal_id}
{
  "name": "test",
  "crm": {
    "type": "Bitrix",
    "domain": "test.asd.com",
  },
  "image": "binnary file"
}

# удалить портал
POST: https://dev1cabinet.chatapp.online/portals/delete/{portal_id}


компании

# проверить инн
POST: https://dev1cabinet.chatapp.online/ajax/member/getLegalInformation
{
    "legalCode": 111
}

GET: https://dev1cabinet.chatapp.online/portals/{portal_id}/companies/list

# создать компанию
POST: https://dev1cabinet.chatapp.online/portals/{portal_id}/companies/create
{
  "name": "test",
  "about": {},
  "act": {}
}

# обновить данные компании
POST: https://dev1cabinet.chatapp.online/portals/{portal_id}/companies/update/{company_id}
{
  "name": "test",
  "image": "binnary file"
}

# удалить компанию
POST: https://dev1cabinet.chatapp.online/portals/{portal_id}/companies/delete/{company_id}





# сотрудники компании
GET: https://dev1cabinet.chatapp.online/portals/{portal_id}/companies/{company_id}/users/list

# добавить пользователя
POST: https://dev1cabinet.chatapp.online/portals/{portal_id}/companies/{company_id}/users/create
{
  "email": "test@sc.uz",
}

# удалить пользователя
POST: https://dev1cabinet.chatapp.online/portals/{portal_id}/companies/{company_id}/users/delete


# роли пользователей
GET: https://dev1cabinet.chatapp.online/portals/modules/list
GET: https://dev1cabinet.chatapp.online/portals/crms/list
GET: https://dev1cabinet.chatapp.online/companies/{company_id}/roles/list
POST: https://dev1cabinet.chatapp.online/companies/{company_id}/roles/create
{
  "name": "Administrator",
  "permissions": [2,3],
}
POST: https://dev1cabinet.chatapp.online/companies/{company_id}/roles/update/{role_id}
{
  "name": "Administrator",
  "permissions": [2,3],
}
POST: https://dev1cabinet.chatapp.online/companies/{company_id}/roles/delete/{role_id}
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
