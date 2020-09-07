echo "test results;;" | tee testResults.txt
for i in {1..20}
do
   ts=$(date +%s%N)
   ng e2e
   duration=$((($(date +%s%N) - ts)/1000000))
   echo -e  "$i; $duration;" >> testResults.txt
done
