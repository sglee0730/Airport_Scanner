# Airport Scanner

![Airport_search](https://user-images.githubusercontent.com/58541337/101318363-8d841380-38a3-11eb-8cdb-8298c7c29f2c.jpg)



ElasticSearch를 활용한 공항 검색입니다.


모두 docker 컨테이너 위에서 실행되고 있습니다.


postreSQL에 저장된 데이터를 Logstash가 수집하여 Elasticsearch의 인덱스에 저장합니다. 


이 때 Elasticsearch의 노드들은 3개로 구성됩니다.


저장된 인덱스들은 검색에 활용되며 수집된 인덱스들과 기록들을 Kibana에서 시각자료로 활용합니다.


nginx는 static file 서빙과 /api로 요청이 들어오면 proxy로의 역할을 수행합니다.
