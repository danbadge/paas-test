Hello, here's a bunch of commands and manual things you need to do to setup cloud foundry on a Vagrant VM

Clone CF repos and install bosh command line client by running this:
> ./setup.sh

Next, in bosh-lite folder we'll fire up vagrant
> cd ./bosh-lite
> vagrant up --provider=virtualbox

Once that's up we'll target the bosh director and login as admin/admin
> bosh target 192.168.50.4 lite
> bosh login

Deploy cloud-foundry to the Vagrant VM
> cd ../cf-release
> ./scripts/generate-bosh-lite-dev-manifest
