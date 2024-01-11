from __future__ import print_function
import time
import sunshine_conversations_client
from sunshine_conversations_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://api.smooch.io
# See configuration.py for a list of all supported configuration parameters.
configuration = sunshine_conversations_client.Configuration(
    host = "https://api.smooch.io"
)
# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration.username = 'YOUR_USERNAME'
configuration.password = 'YOUR_PASSWORD'

# Configure Bearer authorization (JWT): bearerAuth
# Uncomment this if you want to use JWTs
#configuration.access_token = 'YOUR_BEARER_TOKEN'

# Enter a context with an instance of the API client
with sunshine_conversations_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sunshine_conversations_client.ConversationsApi(api_client)
    app_id = '5d8cff3cd55b040010928b5b' # str | Identifies the app.
    conversation_create_body = sunshine_conversations_client.ConversationCreateBody() # ConversationCreateBody | 

    try:
        # Create Conversation
        api_response = api_instance.create_conversation(app_id, conversation_create_body)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ConversationsApi->create_conversation: %s\n" % e)
    try:
        # List Conversations
        api_response = api_instance.list_conversations(app_id, filter, page=page)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ConversationsApi->list_conversations: %s\n" % e)

    try {
            ConversationResponse result = apiInstance.getConversation(appId, conversationId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConversationsApi#getConversation");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    try:
        # Update Conversation
        api_response = api_instance.update_conversation(app_id, conversation_id, conversation_update_body)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ConversationsApi->update_conversation: %s\n" % e)

    try {
            Object result = apiInstance.deleteConversation(appId, conversationId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConversationsApi#deleteConversation");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }