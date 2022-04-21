# tasks-frontend-build
Build repository for Tasks frontend

## Deploying
Any push to the following branches in [tasks-frontend](https://github.com/RedHatInsights/tasks-frontend) repository will trigger a build in this repository which will deploy to corresponding environment.

| Push to branch in dev repo   | Updated branch in this repo   | Environment       | Available at
| :--------------------------- | :---------------------------- | :---------------- | :-----------
| master                       | stage-beta                    | stage beta        | https://console.stage.redhat.com/beta
| stage-stable                 | stage-stable                  | stage stable      | https://console.stage.redhat.com
| prod-beta                    | prod-beta                     | production beta   | https://console.redhat.com/beta 
| prod-stable                  | prod-stable                   | production stable | https://console.redhat.com
