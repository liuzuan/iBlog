WEB_PATH='/home/wwwroot/iBlog'
WEB_USER='root'
WEB_USERGROUP='root'
 
cd $WEB_PATH
#echo "auto pull from git"
git pull

cnpm i

#echo "Finished."