namespace todo;

using Newtonsoft.Json;

[Serializable]
public class Goal
{
    [JsonProperty("uuid")]
    public Guid? Uuid { get; set; }
    [JsonProperty("title")]
    public string Title { get; }
    [JsonProperty("description")]
    public string Description { get; }
    [JsonProperty("deadline")]
    public DateTime? Deadline { get; }
    [JsonProperty("accomplished")]
    public DateTime? Accomplished { get; set; }

    [JsonConstructor]
    public Goal(
        string title,
        string description,
        Guid? uuid = null,
        DateTime? deadline = null,
        DateTime? accomplished = null
    )
    {
        Uuid = uuid;
        Title = title;
        Description = description;
        Deadline = deadline;
        Accomplished = accomplished;
    }
}