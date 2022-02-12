using Microsoft.AspNetCore.Mvc;
using todo;

[ApiController]
[Route("goals")]
public class GoalController : ControllerBase
{
    private GoalInteractor interactor;

    public GoalController()
    {
        interactor = new GoalInteractor();
    }

    [HttpGet]
    public ActionResult<IEnumerable<Goal>> getAll() => Ok(interactor.getAll());

    [HttpPost]
    [Route("add")]
    public ActionResult<IEnumerable<Goal>> add([FromBody] Goal goal) =>
        Ok(interactor.add(goal));

    [HttpPost]
    [Route("delete")]
    public ActionResult<IEnumerable<Goal>> delete([FromBody] Goal goal) =>
        Ok(interactor.delete(goal));

    [HttpDelete]
    public ActionResult<IEnumerable<Goal>> deleteAll() =>
        Ok(interactor.deleteAll());

    [HttpPost]
    [Route("complete")]
    public ActionResult<IEnumerable<Goal>> complete([FromBody] Goal goal) =>
        Ok(interactor.complete(goal));

}