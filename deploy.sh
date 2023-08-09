#!/bin/bash
set +x

case "$1" in

"prod")
	export AWS_DEFAULT_REGION='ap-south-1'
	export S3_BUCKET='hawk.oncrypt.co'
;;

esac

yarn run styleguide:build

aws s3 cp index.html s3://${S3_BUCKET}/
aws s3 cp --recursive ./build/ s3://${S3_BUCKET}/build
