namespace todo;
public interface GoalsStore
{
    public IEnumerable<Goal> getAll();
    public IEnumerable<Goal> add(Goal goal);
    public IEnumerable<Goal> delete(Goal goal);

    public IEnumerable<Goal> deleteAll();
    public IEnumerable<Goal> complete(Goal goal);

}