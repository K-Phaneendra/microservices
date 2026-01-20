#!/bin/bash
set -e

SERVICES_PG=(user auth order payment inventory)
SERVICES_MONGO=(product cart)

install_postgresql_packages () {
  npm install pg
}
install_mongodb_packages () {
  npm install mongodb
}
install_common_packages () {
  npm install express amqplib
  npm install -D typescript ts-node-dev @types/express
}

# install packages for services with postgresql
for SVC in "${SERVICES_PG[@]}"; do
  DIRNAME="services/$SVC-service"
  cd $DIRNAME
  echo "Installing deps in $DIRNAME"
  install_postgresql_packages
  install_common_packages
  cd -
  done
  echo "All dependencies installed for postgreql based api services."

# install packages for services with postgresql
for SVC in "${SERVICES_MONGO[@]}"; do
  DIRNAME="services/$SVC-service"
  cd $DIRNAME
  echo "Installing deps in $DIRNAME"
  install_mongodb_packages
  install_common_packages
  cd -
  done
  echo "All dependencies installed for mongodb based api services."
