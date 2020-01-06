---
title: Script to Generate Role Privileges in MongoDB Databases
date: 2020-01-05
tags: ['note', 'project']
---

The following is valid syntax as of MongoDB 4.2.1:

```js
// columns output are:
// note the 3rd through 6th columns can say "undefined"

/*
*
* role name
* role DB (always admim)
* true if resource is anyResource
* true if resource is cluster
* resource DB name
* resource collection name
* privilege action name
* privilege action name
* ...
*
* */

db.getSiblingDB("admin").runCommand({ rolesInfo: 1, showBuiltinRoles: true, showPrivileges: true }).roles.forEach(function(role) {
    [].concat(role.privileges).concat(role.inheritedPrivileges).forEach(function(priv) {
        var csv =
          role.role +
          "," +
          role.db +
          "," +
          priv.resource.anyResource +
          "," +
          priv.resource.cluster +
          "," +
          priv.resource.db +
          "," +
          priv.resource.collection;
        priv.actions.forEach(function(action) {
          csv += "," + action;
        });
        print(csv);
      });
  });
```